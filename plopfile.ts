import type { ActionType } from "node-plop";
import type { NodePlopAPI } from "plop";

const types = {
  atoms: "atoms",
  molecules: "molecules",
  organisms: "organisms",
  cmsComponents: "cms-components",
  pages: "pages",
} as const;

type Keys = keyof typeof types;
type Type = (typeof types)[Keys];

export default function plopfile(plop: NodePlopAPI): void {
  plop.setGenerator("component", {
    description: "Component generator",
    prompts: [
      {
        name: "type",
        type: "list",
        message: "What type of component would you like to generate?",
        choices: [
          { name: "Atom Component", value: types.atoms },
          { name: "Molecule Component", value: types.molecules },
          { name: "Organism Component", value: types.organisms },
          { name: "Cms-Component", value: types.cmsComponents },
          { name: "Page", value: types.pages },
        ],
      },
      {
        type: "input",
        name: "name",
        message: ({ type }) =>
          `What is the name of your ${
            type === types.pages ? "page" : "component"
          }?`,
        validate: (value, { type } = {}) =>
          value.length === 0
            ? `Please enter a ${
                type === types.pages ? "page" : "component"
              } name`
            : true,
      },
      {
        type: "input",
        name: "prefix",
        when: ({ type }) => type !== types.pages,
        message: ({ type }) =>
          `What prefix do you want to use? (for example ${
            type === "cmsComponents" ? "c" : type.slice(0, 1)
          }1)`,
      },
      {
        type: "input",
        name: "pathname",
        message: ({ type }) =>
          `What is the pathname to the ${
            type === types.pages ? "page" : "component"
          } (i.e path/to/${
            type === types.pages ? "page" : "component"
          }/ or leave blank)?`,
        validate: (value) =>
          value !== "" && !/^([a-z]+(-[a-z]+)*\/)+$/u.test(value)
            ? "The pathname needs to be lowercase and only use the symbols / and -."
            : true,
      },
      {
        type: "confirm",
        name: "createStory",
        when: ({ type }) => type !== types.pages,
        message: () => `Do you want to create a storybook story?`,
        default: true,
      },
    ],
    actions(answers) {
      const { type } = answers as { type: Type };

      return getActions(type, answers ?? { type: "none" });
    },
  });
}

function getActions(
  type: Type,
  { name, pathname, createStory }: Record<string, string>
): Array<ActionType> {
  let base: string;
  switch (type) {
    case types.pages: {
      base = "page";
      break;
    }

    case types.cmsComponents: {
      base = "cms-component";
      break;
    }

    default: {
      base = "component";
    }
  }

  let destination: string;
  switch (type) {
    case types.pages: {
      destination = `src/pages/{{pathname}}`;
      break;
    }

    default: {
      destination = `src/components/{{pathname}}/{{type}}/{{prefix}}-{{dashCase name}}/`;
      break;
    }
  }

  return [
    {
      data: {
        name,
        root: "../".repeat(
          (pathname?.match(/\//u) ?? "").length + (type === types.pages ? 1 : 2)
        ),
        pathname,
        type,
      },
      type: "addMany",
      base: `plop-templates/${base}`,
      templateFiles: [
        `plop-templates/${base}/*.*`,
        createStory ? "" : `!plop-templates/${base}/*.stories.*`,
      ].filter(Boolean),
      destination,
    },
  ];
}

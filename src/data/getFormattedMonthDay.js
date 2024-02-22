function formatMonthDay(date){
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const today = `${month}, ${day}`;
    return { today };
}
export default formatMonthDay
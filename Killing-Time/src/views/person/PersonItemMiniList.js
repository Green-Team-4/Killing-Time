const PersonItemMiniList = ({ castResult }) => {

    const { id, title, } = castResult;

    return (
        <>
        <span style={{fontSize:12}}key={id}>{ title }, </span>
        </>
    );
};

export default PersonItemMiniList;

import '../App.css';

const TabItem = ( {tab, index, setActiveTab} ) => {

    return(
            <button className="btn"
                    key={index}
                    value={index}
                    onClick={() => setActiveTab(index) }
            >
                {tab}
            </button>

    )
}
export default TabItem;
import TabItem from "./TabItem"

const Tabs = ({setAciveTab}) => {
    return(
        <div>
            {
                ["tab one", "tab two","tab three"].map((tab, index)=>(
                    <TabItem
                    key={index}
                    index={index}
                    tab={tab}
                    setActiveTab={setAciveTab}/>
                ))
            }
        </div>
    )
}
export default Tabs;
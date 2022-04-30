import React, {useState} from 'react';

const siteSelectionContext = React.createContext()
export {siteSelectionContext}


let Provider = ({children}) => {
    const [SelectedSite, setSelectedSite] = useState('LandingPage') 

    return (
        <siteSelectionContext.Provider value={{SelectedSite, setSelectedSite}}>
            {children}
        </siteSelectionContext.Provider>
    )
}
 
export default Provider
import {React, useState, useContext} from "react";
import { GlobalContext } from "../GlobalState";
import "./mails.css"

const Mails = ({mailsArr}) => {
    const {isLoggedIn} = useContext(GlobalContext);
    const [mails, setMails] = useState(mailsArr);

    const [selectedMails, setSelectedMails] = useState([]);

    // Перемещение письма в выделенные
    const selectMail = (mail) => {
        setMails(mails.filter((m) => m !== mail));
        setSelectedMails([...selectedMails, mail]);
    };

    // Удаление из выделенных
    const deselectMail = (mail) => {
        setSelectedMails(selectedMails.filter((m) => m !== mail));
        setMails([...mails, mail]);
    };

    return (
        <div className="mails-container">
            <table className="base_mails-container">
                <thead>
                    <tr>
                        <th>All mails</th>
                        {isLoggedIn ? <th>Action</th> : ""}
                    </tr>
                </thead>
                <tbody>
                    {mails.length > 0 ? (
                        mails.map((mail, index) => (
                            <tr>
                                <td key={index}>{mail}</td>
                                {isLoggedIn && (<td><button onClick={() => selectMail(mail)}>Select</button></td>)}
                            </tr>
                            
                        ))
                    ) : (<tr>No letters</tr>)
                    }
                </tbody>
            </table>
            <table className="selected_mails-container">
                <thead>
                    <tr>
                        <th>Selected Mails</th>
                        {isLoggedIn ? <th>Action</th> : ""}
                    </tr>
                </thead>
                <tbody>
                    {selectedMails.length > 0 ? (
                        selectedMails.map((mail, index) => (
                            <tr>
                                <td key={index}>{mail}</td>
                                {isLoggedIn && (<td><button onClick={() => deselectMail(mail)}>Deselect</button></td>)}
                            </tr>
                            
                        ))
                    ) : (<tr>We dont have selected</tr>)
                    }
                </tbody>
            </table>
        </div>
    );

    // return (
    //     <div className="mails-container">
    //         <div className="all-mails">
    //             <h3>All mails</h3>
    //             {mails.length > 0 ? (
    //             mails.map((mail, index) => (
    //                 <div key={index}>
    //                 {mail}
    //                 {isLoggedIn && (
    //                     <button onClick={() => selectMail(mail)}>Select</button>
    //                 )}
    //                 </div>
    //             ))
    //             ) : (
    //             <p>Нет писем</p>
    //             )}
    //         </div>

    //         <div className="selected-mails">
    //             <h3>Selected Mails</h3>
    //             {selectedMails.length > 0 ? (
    //             selectedMails.map((mail, index) => (
    //                 <div key={index}>
    //                 {mail}
    //                 {isLoggedIn && (
    //                     <button onClick={() => deselectMail(mail)}>Deselect</button>
    //                 )}
    //                 </div>
    //             ))
    //             ) : (
    //             <p>We dont have selected</p>
    //             )}
    //         </div>
    //     </div>
    // );
}

export {Mails}
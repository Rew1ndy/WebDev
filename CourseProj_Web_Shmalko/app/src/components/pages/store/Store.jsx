import { React } from "react";
import "./store.css";

const tableTypes = ['all' ,'coffee', 'office', 'computer', 'console', 'dining', 'side'];

function Store() {
    

    return (
        <div className="store-menu">
            {
                tableTypes.map((table, index) => (
                    <div className="type-item" key={index}>
                        <img src={`/imgs/tables/${table} table.jpg`} alt={`table type ${table}`} />
                        <a className={`type-name ${table}`} href={`Store/${table}`}>{`Type: ${table}`}</a>
                    </div>
                ))
            }
        </div>
    );
};

export default Store;
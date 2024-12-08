import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./default-table.css";

function DefaultTable() {
    const { tableType } = useParams();
    const [tableData, setTableData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`/json/tables_${tableType}_table.json`);
            const data = await response.json();
            setTableData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [tableType]);

    return (
        <div className="table-list">
            {tableData.map((table, index) => (
                <div className="table-item" key={index} id={index}>
                    <img src={`/imgs/tables/${(table.type).split(" ")[0].toLowerCase()} table.jpg`} alt={table.name} />
                    <h5 className="table-name">{`Name: ${table.name || "Unknown"}`}</h5>
                    <p className="table-wood">{`Wood: ${table.wood || "Unknown"}`}</p>
                    <p className="table-price">{`Price: ${table.price || "Unknown"}`}</p>
                    <p className="table-desc">{`${table.description || "No description available"}`}</p>
                    <Link to={`/Store/${tableType}/${table.name.replace(/\s+/g, "-").toLowerCase()}`}>
                        More details
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default DefaultTable;
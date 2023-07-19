"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, ButtonGroup } from "@chakra-ui/react";

import { createContext } from "react";

import DataTable from "react-data-table-component";

const CostumerData = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get("https://api.github.com/users");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    console.log(data);

    const columns = [
        {
            name: "TIMESTAMP",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "PURCHASE ID",
            selector: (row) => row.node_id,
            sortable: true,
        },
        {
            name: "MAIL",
            selector: (row) => row.type,
            sortable: true,
        },
        {
            name: "NAME",
            selector: (row) => row.login,
            sortable: true,
        },
        {
            name: "SOURCE",
            selector: (row) => row.url,
            sortable: true,
        },
        {
            name: "STATUS",
            selector: (row) => (row.site_admin ? "True" : "False"),
            sortable: true,
        },
        {
            name: "SELECT",
            cell: (row) => <Button colorScheme="gblue">SELECT</Button>,
        },
    ];

    useEffect(() => {
        getData();
    }, []);

    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
            title="Booking"
            fixedHeader
            highlightOnHover
        />
    );
};

export default CostumerData;

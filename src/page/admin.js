import React from "react"
import { Container, Table, Button } from 'react-bootstrap'

const fontcolor = "#BD0707"

export default function Admin() {
    return (
        <Container className="p-5 mx-auto" style={{ color: fontcolor }}>
            <Table responsive bordered>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Post Code</th>
                        <th>Income</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <TableInput no="1" name="Sugeng" address="Cileungsi" pos="18393" income="69.000" status={<text className="text-warning">Waiting Approve</text>} action={
                        <div className="d-flex">
                            <div className="">
                                <Button variant="danger" className="mr-1">Cancel</Button>
                            </div>

                            <div className="mx-1">
                                <Button variant="success">Approve</Button>
                            </div>
                        </div>
                    } />
                    <TableInput />
                    <TableInput />
                    <TableInput />
                </tbody>
            </Table>
        </Container>
    )
}

function TableInput(props) {
    return (
        <tr>
            <td>{props.no}</td>
            <td>{props.name}</td>
            <td>{props.address}</td>
            <td>{props.pos}</td>
            <td>{props.income}</td>
            <td>{props.status}</td>
            <td>{props.action}</td>
        </tr>
    )
}
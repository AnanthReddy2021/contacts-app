import React from 'react';
import './Style.css'

const ContactsList = (props) => {
    const {data}=props
    return (
        <div className="col-sm-8">
            <div className="row justify-content-center m-2">
                <h2>Contacts List</h2>
            </div> 
            <div className="col-sm-4">

            </div>
            <div >
                <table className="table table-sm table-striped header-fixed">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Email</th>
                            <th scope="col">{" "}</th>
                            <th scope="col">{" "}</th>

                        </tr>
                    </thead>
                    <tbody >
                        {
                            data!==undefined&&data.map((item)=>(
                                <tr key={item.ID}>
                                    <td scope="col">{item.ID}</td>
                                    <td scope="col">{item.FirstName}</td>
                                    <td scope="col">{item.LastName}</td>
                                    <td scope="col">{item.Mobile}</td>
                                    <td scope="col">{item.EmailID}</td>
                                    <td scope="col"><button type="submit" className="btn btn-danger">Edit</button></td>
                                    <td scope="col"><button type="submit" className="btn btn-danger">Remove</button></td>

                                </tr>
                            ))
                        }
                       
                    </tbody>
                </table>

            </div>       
        </div>
    );
};

export default ContactsList;
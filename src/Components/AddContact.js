import React from 'react';

const AddContact = () => {
    return (
        <div className="col-sm-6">
            <div class="row justify-content-center m-2">
                <h2>Add Contact</h2>
            </div> 
            <div>
                <form>
                    <div class="form-group">
                        <label for="First Name">First Name</label>
                        <input type="text" class="form-control" placeholder="Enter First Name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>       
        </div>
    );
};

export default AddContact;
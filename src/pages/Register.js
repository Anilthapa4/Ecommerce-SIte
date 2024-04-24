import React from 'react'

const Register = () => {
    return (
        <>
            <div className='container my-5'>
                <div className='d-flex justify-content-center'>
                    <div className='col-5'>
                        <form className='p-3 shadow'>
                            <h2 className='text-center text-muted'>Register</h2>
                            <div className='mb-2'>
                                <label htmlFor='fname'>First Name</label>
                                <input type='fname' id='fname' className='form-control' />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='lname'>Last Name</label>
                                <input type='lname' id='lname' className='form-control' />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='email'>Email</label>
                                <input type='email' id='email' className='form-control' />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='pwd'>Password</label>
                                <input type='password' id='pwd' className='form-control' />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='cpwd'>Confirm Password</label>
                                <input type='password' id='cpwd' className='form-control' />
                            </div>  
                            <div className='mt-4'>
                                <button className='btn btn-success'>Submit Now</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
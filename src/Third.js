import React from 'react'
import TestNav from './TestNav'

const Third = () => {
  return (
    <>
    <TestNav/>
    <div className='container'>
        <div className='d-flex justify-content-center'>
            <div className='col-5'>
                <form className='p-3 shadow'>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='pwd'>Password</label>
                        <input type='password' id='pwd' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <button className='btn btn-primary'>Sign In</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Third
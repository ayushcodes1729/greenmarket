import React from 'react'
import { SyncLoader  } from "react-spinners"

const override = {
    display: 'block',
    margin: '100px auto',    
}

function Spinner({loading}) {
    return (
        <div className='flex justify-center'>
            <SyncLoader color='#4ade80'
                loading={loading}
                cssOverride={override}
                size={50}
                className='' />
        </div>
    )
}

export default Spinner

import React from 'react'
import moment from 'moment'
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { FcBriefcase } from "react-icons/fc";
import { useAppContext } from '../context/AppContext'
import Wrapper from '../wrappers/property'
import propertyImg from '../assets/images/property.jpeg'
import PropertyInfo from './PropertyInfo'

const Property = ({
    _id,
    owner,
    price,
    propertyLocation,
    propertyType,
    createdAt,
    status,
    avatar
}) => {
    let date = moment(createdAt)
    date = date.format('MMM Do, YYYY')

    const { setEditProperty, deleteProperty } = useAppContext()

    return (
        <Wrapper>
            <div className='image-container'>
                <img src={avatar ? avatar : propertyImg} alt={owner} className='property-image' />
            </div>
            <div className='info'>
                <h5> <span className='text-red-800'>Contact Info:</span> <br></br> <span className='text-lg'>{owner}</span></h5>
                <p>${price}</p>
            </div>
            <div className='content'>
                <div className='content-center'>
                    <PropertyInfo icon={<FaMapLocationDot />} text={propertyLocation} />
                    <PropertyInfo icon={<BsFillCalendarDateFill />} text={date} />
                    <PropertyInfo icon={<FcBriefcase />} text={propertyType} />
                    <div className={`status text-green-700 bg-[#20C99766] ${status}`}>{status}</div>
                </div>
                <footer>
                    <div className='actions'>
                        <Link
                            to='/add-property'
                            className='btn edit-btn'
                            onClick={() => setEditProperty(_id)}
                        >
                            Edit
                        </Link>
                        <button
                            type='button'
                            className='btn delete-btn'
                            onClick={() => deleteProperty(_id)}
                        >
                            Delete
                        </button>
                    </div>
                </footer>
            </div>
        </Wrapper>
    )
}

export default Property

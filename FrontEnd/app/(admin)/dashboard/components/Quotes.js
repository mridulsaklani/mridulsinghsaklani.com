"use client"
import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Quotes = () => {
const [quotes, setquotes] = useState([])

useEffect(() => {
    axios
        .get(`${process.env.NEXT_PUBLIC_SERVER_URL}quote`)
        .then((res) => {
            setquotes(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);

  return (
    <>
    <div className='w-full background'>
        <h2 className=' text-xl font-semibold'>Quotes</h2>

        <div className="overflow-x-auto">
      <table className="min-w-full  border border-gray-200 rounded-lg">
        <thead>
          <tr className=" text-white">
            <th className="px-4 py-2 text-left"> Name</th>
          
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Number</th>
            <th className="px-4 py-2 text-left">Message</th>
          </tr>
        </thead>
        <tbody>
          {quotes && quotes.length > 0 ? (
            quotes.map((quote, index) => (
              <tr
                key={index}
                className={`border-b ${index % 2 === 0 ? "" : ""}`}
              >
                <td className="px-4 py-2">{quote.firstname} {quote.lastname}</td>
                
                <td className="px-4 py-2">{quote.email}</td>
                <td className="px-4 py-2">{quote.number}</td>
                <td className="px-4 py-2">{quote.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-4 py-2 text-center text-gray-500">
                No quotes available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

    </div>
    </>
  )
}

export default Quotes
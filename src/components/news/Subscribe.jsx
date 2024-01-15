'use client'
import React from 'react'

const Subscribe = () => {
  return (
    <div>
      <form>
        <fieldset className="form-control w-80 text-white">
          <label className="label">
            <span className="label-text text-white">Enter your email address</span>
          </label>
          <div className="join">
            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Subscribe
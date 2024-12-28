import { useState } from 'react'

const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    const data = {
      firstName,
      lastName,
      email
    }

    const url = "http://127.0.0.1:5000/create_contact"
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    const response = await fetch(url, options)
    if(response.status !== 201 && response.status !== 200){
      const data = await response.json()
      alert(data.message)
    } else {
      // success
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm
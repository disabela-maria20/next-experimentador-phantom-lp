function ModalMessage({ open, setOpen, title, message }) {
  return (
    <div style={{
      position: 'fixed',
      top: '50px',
      right: '50px',
      height: '150px',
      minWidth: '50vw',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(9,0,0,0.5)',
      display: open ? 'block' : 'none',
      transition: 'all 0.3s ease',
      color: '#EF4444',
    }
    }>
      <h1 style={{ fontSize: '1.5em' }}>{title}</h1>
      <hr />
      <br />
      <p>{message}</p>
      <button style={{
        position: 'absolute',
        top: '5px',
        right: '5px',
        margin: '2px 5px',
        color: '#000',
      }} onClick={() => setOpen(false)}>✖️</button>
    </div >
  )
}

export default ModalMessage

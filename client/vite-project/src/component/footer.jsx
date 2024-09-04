import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer style={styles.footer}>
        <p>&copy; Luyanda Shamase Client Server SQLite3. All rights reserved.</p>
      </footer>
    </div>

  )
};
let styles = {
    footer: {
        backgroundColor: '#3E5151',
        color: '#fff',
        padding: '10px 20px',
        textAlign: 'center',
        width: '100vw'
    }
}


export default Footer

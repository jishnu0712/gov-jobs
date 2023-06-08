import styles from '../styles/login.module.css'

const Login = () => {
    return (
      <div className={styles.container}>
        <h2>Login</h2>
        <form className="form">
          <input type="text" placeholder="Username" className={styles.input}/>
          <input type="password" placeholder="Password" className={styles.input}/>
          <button type="submit" className={styles.button}>Log In</button>
        </form>
      </div>
    );
  };
  
  export default Login;
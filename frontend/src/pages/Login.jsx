import { Link } from "react-router-dom";

const Login = () => {
  return (<div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded-lg"
          />

          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>)
};

export default Login;

import Navigation from './components/Navigation'
import '../styles/index.css'

export default function RootLayout({ children }) {
	RootLayout.propTypes = children
	return (
		<html lang='en'>
			<head>
				<title>First MERN App</title>
			</head>
			<body>
				{/* Rendering in Main Page */}
				<Navigation />
				{children}
			</body>
		</html>
	)
}

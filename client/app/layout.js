import Navigation from './components/Navigation'
import '../styles/index.css'

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<title>My first App with Next js</title>
			</head>
			<body>
				<Navigation />
				{children}
			</body>
		</html>
	)
}
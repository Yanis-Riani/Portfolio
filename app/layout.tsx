import 'katex/dist/katex.css';
import { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "../global.css";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "Yanis Riani",
		template: "%s | yanisriani.fr",
	},
	description: "Web développeur chez Aproma Conseils et développeur de jeux vidéo",
	openGraph: {
		title: "Yanis Riani",
		description:
			"Web développeur chez Aproma Conseils et développeur de jeux vidéo",
		url: "https://yanisriani.fr",
		siteName: "Yanis Riani",
		images: [
			{
				url: "https://yanisriani.fr/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "fr-FR",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Yanis Riani",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}

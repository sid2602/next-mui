import {
	Accordion,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Link,
	Typography,
} from "@mui/material";

import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { default as NextLink } from "next/link";

export default function Home() {
	return (
		<main>
			<Typography variant="h1">Hello</Typography>
			<Typography
				style={{
					color: "red",
				}}
			>
				ANOTHER
			</Typography>
			<Button variant="outlined">BTN</Button>
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<Typography
						sx={{ fontSize: "1rem", color: "text.secondary" }}
						gutterBottom
					>
						lorem ipsum
					</Typography>
					<Typography variant="h5" component="div">
						LOL
					</Typography>
					<Typography sx={{ mb: 1.5, color: "text.secondary" }}>
						lorem ipsum
					</Typography>
					<Typography variant="body2">lorem ipsum lorem ipsum</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Learn More</Button>
				</CardActions>
				<Accordion>
					<AccordionSummary aria-controls="panel1-content" id="panel1-header">
						Accordion 1
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary aria-controls="panel2-content" id="panel2-header">
						Accordion 2
					</AccordionSummary>
					<AccordionDetails>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</AccordionDetails>
				</Accordion>
				<Box display={"flex"} gap={"4rem"}>
					<Link href="/test" component={NextLink}>
						Test
					</Link>

					<Link href="/customComponent" component={NextLink}>
						customComponent
					</Link>

					<Link href="/form" component={NextLink}>
						form
					</Link>
				</Box>
			</Card>
		</main>
	);
}

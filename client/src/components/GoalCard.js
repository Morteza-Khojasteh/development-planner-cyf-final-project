import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Paper from "@mui/material/Paper";
import TaskTicket from "./TaskTicket";
import AddTaskIcon from "./AddTaskIcon";

export default function GoalCard({ fakeGoal }) {
	const [goal, setGoal] = useState(fakeGoal);
	const [value, setValue] = useState("");
	console.log(value);

	function newTaskHandle() {
		setGoal((prev) => {
			prev.tasks.push({
				id: prev.tasks.length,
				goal_id: goal.id,
				title: value,
			});
			// console.log(prev);
			return { ...prev };
		});
	}
	return (
		<Card key={goal.id} sx={{ maxWidth: 400 }}>
			<CardHeader title={goal.title}></CardHeader>
			<IconButton aria-label="settings">
				<MoreVertIcon />
			</IconButton>
			<CardContent>
				<TaskTicket tasks={goal.tasks} />
			</CardContent>
			<Paper
				component="form"
				sx={{
					p: "2px 4px",
					display: "flex",
					alignItems: "center",
					width: 380,
				}}
			>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="Add new task"
					inputProps={{ "aria-label": "new task" }}
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
				<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
				<AddTaskIcon newTaskHandle={newTaskHandle} />
			</Paper>
			<CardActions
				sx={{ display: "flex", justifyContent: "flex-end" }}
				disableSpacing
			>
				<IconButton aria-label="share">
					<DeleteOutlinedIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}

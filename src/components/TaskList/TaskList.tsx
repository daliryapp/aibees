import { FC, useState } from 'react';
import {
    Box,
    Paper,
    List,
    ListItem,
    Grid,
    Stack,
    Typography,
    ButtonGroup,
    Button
} from '@mui/material';
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import TaskListStyle from './TaskListStyle';
import classNames from "classnames";
import CreateTask from 'components/CreateTask';
import { TasksModel } from "models/tasksModel";
import ShowTask from 'components/ShowTask';
import { setTaskDoneStatus } from "redux/tasksSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";

const TaskList: FC = () => {
    const classes = TaskListStyle();
    const taskList = useSelector((state: RootState) => state);
    const [open, setOpen] = useState(false);
    const [openShowTask, setOpenShowTask] = useState(false);
    const [taskInfo, setTaskInfo] = useState<TasksModel>();
    const dispatch = useDispatch<AppDispatch>();
    const handleClose = () => {
        setOpen(false);
        setOpenShowTask(false);
        setTaskInfo({});
    };

    const decidePriorityColor = (priority: string) => {
        let retClass;
        switch (priority) {
            case 'low':
                retClass = classes.priorityColorRed;
                break;
            case 'medium':
                retClass = classes.priorityColorWarning;
                break;
            case 'high':
                retClass = classes.priorityColorSuccess;
                break;
        }
        return retClass;
    }
    const doneTask = (taskId: string) => {
        if (taskId) {
            dispatch(
                setTaskDoneStatus({ isDone: true, id: taskId })
            );
        }
    }
    const editTask = () => {
        setTaskInfo(taskInfo);
        setOpenShowTask(false);
        setOpen(true);
    }
    return (
        <>
            {taskList.length === 0 ?
                <Button variant="contained" color="warning" onClick={() => setOpen(true)}>
                    Create your first Task ;)
                </Button> :
                <>
                    <Paper style={{ maxHeight: 400, overflow: 'auto', width: '100%' }}>

                        <List>
                            {taskList.map((task) => (
                                <ListItem key={task.id} component="div" className={classes.listItem} >
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} onClick={() => { setTaskInfo(task); setOpenShowTask(true); }} className={classes.taskTitle}>
                                            <Stack direction="column">
                                                <Typography variant="h5" component="h5" >{task.title}</Typography>
                                                <Typography variant="caption" component="p" className={classes.description}>{task.description}</Typography>
                                            </Stack>
                                        </Grid>
                                        {!task.isDone &&
                                            <Grid item xs={6}>
                                                <Stack direction="column" alignItems="flex-end">
                                                    <Stack direction="row">
                                                        <Typography variant="h6" component="h6" className={classes.priorityTypoGraphy}>{task.priority}</Typography>
                                                        <div className={classNames(classes.priorityColor, task.priority ? decidePriorityColor(task.priority) : null)}></div>
                                                    </Stack>
                                                    <ButtonGroup size="small" aria-label="small button group" className={classes.buttonGroup}>
                                                        <Button key="done" color="warning" onClick={() => doneTask(task.id!)}>Done Task</Button>
                                                        <Button key="edit" color="success" onClick={() => { setTaskInfo(task); setOpen(true); }}>Edit Task</Button>
                                                    </ButtonGroup>
                                                </Stack>
                                            </Grid>
                                        }
                                    </Grid>
                                </ListItem>
                            ))}
                        </List>

                    </Paper>
                    <Stack alignItems="flex-end" sx={{ width: '100%' }}>
                        <Button variant="contained" color="error" onClick={() => setOpen(true)} sx={{ borderRadius: 50, width: 45, height: 45, minWidth: 0 }}>+</Button>
                    </Stack>

                </>
            }
            <CreateTask isOpen={open} handleClose={handleClose} taskInfo={taskInfo} />
            <ShowTask isOpen={openShowTask} handleClose={handleClose} taskInfo={taskInfo} editTask={() => { editTask() }} />
        </>
    );
}

export default TaskList;
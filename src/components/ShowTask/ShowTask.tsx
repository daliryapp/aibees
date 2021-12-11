import { FC } from 'react';
import { TasksModel } from "models/tasksModel";
import useStyles from './ShowTaskStyle';
import {
    Modal,
    Box,
    Stack,
    Typography,
    Divider,
    Button
} from '@mui/material';
import classNames from "classnames";
import { setTaskDoneStatus, removeTask } from "redux/tasksSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";


interface ICreateTask {
    isOpen: boolean;
    handleClose: () => void;
    taskInfo?: TasksModel;
    editTask: () => void;
}
const ShowTask: FC<ICreateTask> = (props) => {
    const { isOpen, handleClose, taskInfo, editTask } = props;
    const classes = useStyles();
    const dispatch = useDispatch<AppDispatch>();

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
    const doneTask = () => {
        if (taskInfo && taskInfo.id) {
            dispatch(
                setTaskDoneStatus({ isDone: true, id: taskInfo.id })
            );
            handleClose();
        }
    }
    const deleteTask = () => {
        if (taskInfo && taskInfo.id) {
            dispatch(
                removeTask(taskInfo.id)
            );
            handleClose();
        }
    }

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box className={classes.modalDialog}>
                <Stack direction="column" className={classes.showListWrapper}>
                    <Typography variant="h6" mb={4} align="center">
                        {taskInfo && taskInfo.id ? `Task ${taskInfo.title}` : ''}
                    </Typography>
                    {taskInfo && taskInfo.id ? <>
                        {taskInfo && !taskInfo.isDone &&
                            <div className={classes.priorityWrapper}>
                                <div className={classNames(classes.priorityColor, taskInfo.priority ? decidePriorityColor(taskInfo.priority) : null)}></div>
                                <Typography variant="h6" component="h6" className={classes.priorityTypoGraphy} ml={2}>{taskInfo.priority}</Typography>
                            </div>
                        }
                        <Divider variant="middle" />
                        <Stack justifyContent="center" alignItems="center">
                            <div className={classes.taskDescriptionWrapper}>
                                <Typography variant="body2" component="p" mt={6}>{taskInfo.description}</Typography>
                            </div>
                        </Stack>
                    </> : null}
                    {taskInfo && !taskInfo.isDone &&
                        <div className={classes.buttonContent}>
                            <Stack direction="row" justifyContent="space-between">
                                <Button
                                    color="warning"
                                    size="large"
                                    variant="contained"
                                    onClick={() => editTask()}
                                >
                                    Edit Task
                                </Button>
                                <Button
                                    color="success"
                                    size="large"
                                    variant="contained"
                                    onClick={() => doneTask()}
                                >
                                    Done Task
                                </Button>
                                <Button
                                    color="error"
                                    size="large"
                                    variant="contained"
                                    onClick={() => deleteTask()}
                                >
                                    Delete Task
                                </Button>
                            </Stack>
                        </div>
                    }
                </Stack>
            </Box>
        </Modal>
    );
};
export default ShowTask;
import { FC } from 'react';
import {
    Modal,
    Box,
    Stack,
    Typography,
    Divider,
    TextField,
    Button,
    Radio,
    FormControl,
    RadioGroup,
    FormControlLabel
} from '@mui/material';
import { makeStyles } from 'theme';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { addTask, editTask } from "redux/tasksSlice";
import { TasksModel } from "models/tasksModel";

interface ICreateTask {
    isOpen: boolean;
    handleClose: () => void;
    taskInfo?: TasksModel;
}
const useStyles = makeStyles(({ spacing, palette: { onPrimary } }) => ({
    modalDialog: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 575,
        backgroundColor: onPrimary.main,
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5), 0px 3px 3px rgba(0, 0, 0, 0.4), 0px 1px 8px rgba(0, 0, 0, 0.6)',
        padding: spacing(2),
        overflow: 'auto',
    }
}));
const CreateTask: FC<ICreateTask> = (props) => {
    const { isOpen, handleClose, taskInfo } = props;
    const classes = useStyles();
    //React Redux Hooks
    const dispatch = useDispatch<AppDispatch>();
    const validateSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),
        description: Yup.string()
            .max(255)
            .required('Task Description is required'),
        gift: Yup.string()
            .max(150)
            .required('Gift and KPI for this task is required'),
    });
    const initialValues = {
        title: '',
        description: '',
        gift: '',
        priority: 'low',
    };
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box className={classes.modalDialog}>
                <Stack direction="column">
                    <Typography variant="h6" mb={2} align="center">
                        {taskInfo && taskInfo.id ? 'Edit Task' : 'Add New Task'}
                    </Typography>
                    <Divider variant="middle" />
                    <Formik
                        initialValues={taskInfo || initialValues}
                        validationSchema={validateSchema}
                        onSubmit={async (
                            values,
                            { setStatus, setSubmitting },
                        ): Promise<void> => {
                            try {
                                if (taskInfo && taskInfo.id) {
                                    dispatch(editTask({
                                        id: taskInfo.id,
                                        title: values.title,
                                        description: values.description,
                                        gift: values.gift,
                                        priority: values.priority,
                                        isDone: false
                                    }));
                                    handleClose();
                                } else {
                                    dispatch(addTask(values.title!, values.description!, values.gift!, values.priority!, false));
                                }
                            } catch (err) {
                                setStatus({ success: false });
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            touched,
                            values,
                        }): JSX.Element => (
                            <form noValidate onSubmit={handleSubmit}>
                                <TextField
                                    error={Boolean(touched.title && errors.title)}
                                    fullWidth
                                    helperText={touched.title && errors.title}
                                    label="Task Title"
                                    margin="normal"
                                    name="title"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    value={values.title}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(touched.description && errors.description)}
                                    fullWidth
                                    helperText={touched.description && errors.description}
                                    label="Task Description"
                                    margin="normal"
                                    name="description"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    value={values.description}
                                    variant="outlined"
                                    multiline
                                    rows={3}
                                />
                                <TextField
                                    error={Boolean(touched.gift && errors.gift)}
                                    fullWidth
                                    helperText={touched.gift && errors.gift}
                                    label="Gift and KPI for this task;)"
                                    margin="normal"
                                    name="gift"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    value={values.gift}
                                    variant="outlined"
                                />
                                <FormControl component="fieldset" sx={{ width: '100%' }}>
                                    <RadioGroup row name="row-radio-buttons-group" sx={{ justifyContent: 'space-between' }}>
                                        <FormControlLabel value="Low" control={<Radio name="priority" value="low" color="error" onChange={handleChange} checked={values.priority === 'low'} />} label="Low" />
                                        <FormControlLabel value="Medium" control={<Radio name="priority" value="medium" color="warning" onChange={handleChange} checked={values.priority === 'medium'} />} label="Medium" />
                                        <FormControlLabel value="High" control={<Radio name="priority" value="high" color="success" onChange={handleChange} checked={values.priority === 'high'} />} label="High" />
                                    </RadioGroup>
                                </FormControl>
                                <Box sx={{ mt: 3 }}>
                                    <Stack justifyContent="center">
                                        <Button
                                            color="warning"
                                            disabled={isSubmitting}
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                        >
                                            {taskInfo && taskInfo!.id ? 'Edit Task' : 'Add to Tasks'}
                                        </Button>
                                    </Stack>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Stack>
            </Box>
        </Modal>
    );
};

export default CreateTask;
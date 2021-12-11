import { makeStyles } from 'theme';

const TaskListStyle = makeStyles(({ spacing, palette: { onPrimary, neutral, primary, error, warning, success } }) => ({
    listWrapper: {
        width: '100%',
        height: 400,
        overflowY: 'auto',
        overflowX: 'hidden',
    },
    listItem: {
        border: '1px solid',
        borderColor: neutral[400],
        borderRadius: 8,
        margin: spacing(4, 0),
        padding: spacing(3),
    },
    taskTitle: {
        cursor: 'pointer'
    },
    description: {
        color: neutral[400],
        paddingTop: spacing(1)
    },
    priorityColor: {
        width: 25,
        height: 25,
        borderRadius: 50,
        border: '1px solid',
        borderColor: neutral[400],
        marginLeft: spacing(2)
    },
    priorityColorRed: {
        backgroundColor: error.main,
    },
    priorityColorWarning: {
        backgroundColor: warning.main,
    },
    priorityColorSuccess: {
        backgroundColor: success.main,
    },
    buttonGroup: {
        marginTop: spacing(2)
    },
    priorityTypoGraphy: {
        textTransform: 'uppercase'
    }
}));

export default TaskListStyle;
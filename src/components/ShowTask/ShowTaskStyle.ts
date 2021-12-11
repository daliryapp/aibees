import { makeStyles } from 'theme';

const useStyles = makeStyles(({ spacing, palette: { onPrimary, neutral, error, warning, success } }) => ({
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
        minHeight: 350
    },
    showListWrapper: {
        position: 'relative',
        height: 350
    },
    priorityWrapper: {
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'auto'
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
    priorityTypoGraphy: {
        textTransform: 'uppercase'
    },
    taskDescriptionWrapper: {
        maxWidth: 300
    },
    buttonContent: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }
}));

export default useStyles;
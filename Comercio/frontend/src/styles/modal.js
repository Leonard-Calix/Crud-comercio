export const modalStyle = (theme) => (

    {
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: '#073b4c',
        },
        btn: {
            '& > *': {
                margin: theme.spacing(1),
            }
        },
        imput: {
            '& > *': {
                margin: theme.spacing(1),
                width: '100%',
            },
        },
        select: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '100%',
            },
        },
    }


)
import { Alert, Box, Button, Card, CardContent, CircularProgress, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findOne, Post } from "../misc/http";

export default function PostDetail() {

    const nav = useNavigate();
    const { post: ID } = useParams()

    const [ post, setPost ] = useState<Post|undefined>();
    useEffect(() => { if(ID) (async () => setPost(await findOne(ID)))() }, [ID]);

    return (
       
        <>

            { post ? post.id ? (

                <Card variant="outlined" color="secondary">
                    <CardContent>
                        <Typography variant="h4" color='secondary'>
                            { post.title }
                        </Typography>
                        <Divider sx={{ marginY: 2 }} />
                        <Typography variant="body1">
                            { post.body }
                        </Typography>
                    </CardContent>
                </Card>
        
            ) : (

                <Alert severity="error">Postagem não foi encontrada!</Alert>

            ) : (
        
                <Box sx={{ textAlign: 'center', marginY: 10 }}>
                    <CircularProgress />
                </Box>
        
            )}
        
            <Button
                onClick={ () => nav('/') }
                sx={{ marginTop: 2 }}
                variant='contained'
                color='secondary'
                fullWidth
            >Voltar</Button>

        </>

    );

}

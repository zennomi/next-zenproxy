import {
    Container,
    Typography,
    OutlinedInput,
    Stack,
    Checkbox,
    InputAdornment,
    FormControl,
    FormGroup,
    FormControlLabel,
    Button,
    Card,
    CardHeader,
    CardContent,
    Alert,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import Iconify from '../../components/Iconify';
import { FormEventHandler, useState } from 'react';

// ----------------------------------------------------------------------
function numberWithCommas(x: string) {
    x = x.toString();
    const pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

export default function Tool() {
    const [price, setPrice] = useState(0);
    const [isMercari, setIsMercari] = useState(false);
    const [result, setResult] = useState(0);
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);

    console.log(result);

    const handleCheckPrice: FormEventHandler = (event) => {
        event.preventDefault();
        setCount(count => count + 1);
        const rate = isMercari ? 175 : 173;
        let profit;
        if (count > 10 + price % 10) {
            setCount(0);
            setResult(0);
            setText("Gián điệp shop nào hay sao mà check giá nhiều thế ạ :'(");
            return;
        }
        if (price < 100) { setResult(-10); return; }
        else if (price < 1081) profit = 30 + price % 10; // < 200k
        else if (price < 1621) profit = 40 + price % 10; // < 300k
        else if (price < 2702) profit = 40 + price % 10; // < 400k
        else if (price < 3783) profit = 50 + price % 10; // < 500k
        else if (price < 5405) profit = 60 + price % 10; // < 700k
        else if (price < 8108) profit = 80 + price % 10; // < 1000k
        else if (price < 21621) profit = 200 + price % 10;  // < 4000k
        else profit = 400;
        setResult(Math.round((rate * price * 1.06) / 1000 + profit) * 1000);
    }

    return (
        <Stack sx={{ my: 2 }} spacing={2}>
            <Typography variant="h3" component="h1" paragraph>
                Imouto Store - Tool tính giá nhanh
            </Typography>
            <Typography marginBottom={2}>
                Tool sẽ giúp bạn tính giá nhanh mà khỏi cần chờ chủ shop rep 🤣
            </Typography>
            <form onSubmit={handleCheckPrice}>
                <FormControl variant="outlined">
                    <OutlinedInput
                        value={price}
                        onChange={(event) => setPrice(Number(event.target.value))}
                        startAdornment={<InputAdornment position="start">¥</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        placeholder="Nhập giá yên của mặt hàng tại đây"
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        onFocus={event => {
                            event.target.select();
                        }}
                    />
                </FormControl>
                <FormGroup>
                    <FormControlLabel control={<Checkbox value={isMercari} onChange={(event) => setIsMercari(event.target.checked)} />} label="Tích ô này nếu mặt hàng trên website Mercari" />
                </FormGroup>
                <Button variant='contained' type='submit'>Xem giá</Button>
            </form>
            {
                result > 0 &&
                <Stack spacing={1}>
                    <Card>
                        <CardContent>
                            <Typography align='center'>Giá tiền mua tại Imouto Store sẽ là</Typography>
                            <Typography variant='h2' align='center'>
                                {numberWithCommas(String(result))}Đ
                            </Typography>
                            <Typography variant='subtitle2' align='center'>*Chưa tính tiền cân</Typography>
                        </CardContent>
                    </Card>
                    <div>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<Iconify icon='eva:arrow-ios-downward-fill' />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Tiền cân là gì?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {`Tiền cân là tiền vận chuyển quốc tế bằng đường máy bay (1-2 tuần là về tới Việt Nam). 
                                    Khi đặt cọc bạn chỉ cần cọc số tiền trên, còn tiền cân Imouto Store sẽ thông báo 
                        bạn sau khi cân hàng chính xác, không lấy dư. Giá cân tại shop là `}
                                </Typography>
                                <Typography variant='h4' align='center'>
                                    200k/kg
                                </Typography>
                                <Typography>Áng chừng một số loại mặt hàng</Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Manga" secondary="30k" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Light Novel" secondary="40k" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Artbook > 50 trang" secondary="80k" />
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Stack>
            }
            {
                result < 0 &&
                <Alert severity='error'>Đừng đùa shop thế 😅</Alert>
            }
            {
                !result && text &&
                <Alert severity='warning'>{text}</Alert>
            }

        </Stack>
    );
}

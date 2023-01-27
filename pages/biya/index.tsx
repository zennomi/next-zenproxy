// next
import Head from 'next/head';
// @mui
import {
    Card,
    Stack,
    Container,
    Typography,
    Button,
} from '@mui/material';
// hooks
import useCopyToClipboard from '../../src/hooks/useCopyToClipboard';
// hooks
// components
import Iconify from '../../src/components/Iconify';
export default function BiyaPage() {
    const { copy } = useCopyToClipboard();

    const onCopy = (text: string) => {
        if (text) {
            copy(text);
        }
    };

    return <>
        <Head>
            <title>Văn mẫu Bicon - Zennomi</title>
            <meta property="og:title" content="Văn mẫu Bicon - Zennomi" />
            <meta property="og:type" content="article" />
            <meta property="og:image" content="https://c1.kemono.party/data/e0/20/e020d21be07c0516bee0753a9ea1801619f57cdaaae82bf82f77b9d4ba7d2662.jpg?f=fe12071e-3cc1-423f-bb96-9964f5c464d5.jpg" />
            <meta property="og:url" content="https://zenno.moe/biya/" />
            <meta property="og:description" content="Mẫu hội thoại giúp nâng tầm fan Việt Nam trong mắt Biya" />
        </Head>
        <Container sx={{ py: 2 }}>
            <Stack spacing={2}>
                <Typography variant='h3'>
                    Mẫu hội thoại giúp nâng tầm fan Việt Nam trong mắt Biya
                </Typography>
                <Typography variant='subtitle1' color="primary.main">
                    Một lần là Bicon, mãi mãi là Bicon
                </Typography>
                {
                    copyPasta.map((text, index) =>
                        <Card key={index} sx={{ p: 5 }}>
                            <Stack spacing={2}>
                                <div>
                                    <Button onClick={() => onCopy(text)} fullWidth={false} endIcon={<Iconify icon="eva:copy-fill" width={24} />}>Copy</Button>
                                </div>
                                <Typography>{text}</Typography>
                            </Stack>
                        </Card>
                    )
                }
            </Stack>
        </Container>
    </>
}

const copyPasta = [
    'Chào bạn, tôi là trưởng nhóm fandom của bạn tại Việt Nam. Tôi đã theo dõi bạn được gần 2 năm. Rất hạnh phúc vì được gặp trực tiếp bạn. Tôi luôn ủng hộ bạn.',
    '안녕하세요!베트남 팬덤 리더이다. 나는 너를 거의 2년 동안 지켜보았다. 당신을 직접 만나서 너무 행복한다. 나는 항상 너를 응원한다~',
    "Tôi là fan của Biya cũng 20 năm nay rồi. Còn nhớ hồi bé, với cái máy tính cà tàng, bố tôi mở một bài post của ngài Zen ca ngợi Biya lên, tôi ngồi xem cùng, chợt thấy cuốn hút bởi vẻ ngoài, thần thái và bo đì tuyệt đỉnh. Và thế là tôi đã đem lòng yêu Biya, yêu luôn cả ngài Zen từ đó. Tôi bắt đầu lên mạng tìm thông tin, những điểm thú vị và thông tin bên lề của Biya, và càng thêm yêu cô ấy hơn. Trải qua bao nhiêu năm tháng thăng trầm, tôi vẫn mãi giữ tình yêu với Biya. Để rồi đến hôm trước, khi được chứng kiến AniAni mời Biya về VN, trong tôi lại bùng cháy lên cảm xúc năm xưa một lần nữa, mãnh liệt hệt như lần đầu tiên mà tôi xem Biya vậy. Đấy là fan nội thành chứ fan ngoại thành như tôi và ngài Zen thì tri đải dó vcl",
    'Đã 4536 tiếng đồng hồ Biya không up ảnh fanbox, tôi không thể ngừng run và suy sụp tinh thần trầm trọng. Hôm nay tôi thức dậy và cố gắng tải lại trang fanbox Biya nhưng không có cập nhật nào mới, tôi đã rất hoảng loạn nhưng đã bình tĩnh lại sau vài giờ. Hôm nay tôi không thể dọn nhà đón năm mới, tôi lo lắng đến mức lấy khẩu súng của bố tôi từ nhà kho, nghĩ đến việc tự sát. Tôi chẳng là gì nếu không có Biya, đó là cuộc sống của tôi, là định mệnh của tôi, nếu không có Biya, tôi sẽ không thể làm được gì. Biya là sinh vật tuyệt vời nhất từng được tạo ra và tôi không thể bỏ được cơn nghiện của mình, em ấy là con người tuyệt nhất từng tồn tại. Tôi không thể ngừng run và khóc, tôi rất lo lắng.Tôi sợ đến mức có thể mất trí và phát điên. Tôi muốn Biya về Việt Nam.',
    'ベトナムでBiyaちゃんに会いたいです。楽しみにしています~',
    "Cuối cùng mới có một bộ page mà ad page đúng chuẩn hình mẫu lý tưởng của tao. Một kẻ bicon và chúa hề thực thụ . Đám bạn không hiểu tại sao tao trở nên thích cosplay và luôn dán mắt vào màn hình điện thoại để xem Biya. Chúng nó không biết Biya của tao và không hề biết Biya xuất chúng tới mức nào. Tao chẳng coi chúng là gì ngoài một lũ không biết cảm nhận nghệ thuật. Tao ước mình có thể vào trong miền nam và bộc lộ con người thực sự của mình. Tao tin chắc rằng tao chính là hoá thân của Zennomi.🐧",
    'Kính thưa hội đồng tuyển CTV, em có bằng JLPT N3 tiếng Nhật, đỗ khoá N2 của Riki, trên trường 6 môn Nhật điểm A+, 2 môn Nhật điểm A, hiện đang là lớp trưởng lớp tiếng Nhật 7, nhóm trưởng môn tiếng Nhật chuyên ngành, cựu dịch giả tiếng Nhật.\nTiếng Hàn tuy mới trình độ học thuộc bảng chữ cái nhưng đã chiêm qua 48 bộ phim Hàn truyền hình dài tập, fan nhóm nhạc Momoland, nyc đi du học Hàn,... \nKính mong hội đồng xem xét 🐧',
    'Kỹ năng tự vệ Bicon số thứ 2:\nNếu bạn gặp Bicon ở ngoại thành đang khoe ảnh vú đít của Biya và bắt bạn xem nó, hãy giả vờ đồng ý vui vẻ nhận lời. Nhân lúc nó đang hào hứng giới thiệu từng kẽ hở trong ảnh thì bạn hãy bẻ tay giật tấm ảnh đó và nói: "vậy mày có biết sắp tới Biya sẽ về đâu không?". Nhân lúc nó đang suy nghĩ về câu trả lời thì bạn hãy trả lời hộ nó để tâm lý ngày càng nặng lên "Biya sẽ vào HcM đó, vậy mày có tiền để vào mà ngắm Biya của mày không hả con đỏ chí?" Lúc này nó đã rất cay vì không được gặp Biya rồi, bạn hãy tận dụng mà chốt hạ nó bằng một cú gạt chân nhẹ nhàng như cách nữ sinh cao trung cất poster Biya vậy.\nCảm ơn các bạn đã xem, chúc các bạn một ngày tốt lành và djtme Bicon ngoại thành tri đo dai',
    'vkl ông nào đồn tôi làm staff cho fes A, nếu quan hệ tới mức đó tôi sẽ nhờ BTC nhờ Biya rep comment của tôi. sau đó tôi sẽ cap lại, in màu giấy C300 cán bóng đóng khung treo thật to ở nhà. thế là mỗi khi khách đến chơi họ sẽ hỏi "à thằng cu nhà anh chị được biya rep comment đúng không?". xời, nghĩ mà mát mặt cho bố mẹ.',
    'Biya là artist kiêm cosplayer và vẽ chính mình khi cos và zusto thôi mà mấy ông. Do t bị trầm cảm tê liệt cảm xúc r hay sao ấy mà t thấy biya bthg thế nhể',
    'Rất nhiều bạn cứ nhai đi nhai lại cái câu là "Biya về không anh?", muốn biết "Biya về không anh?" thì hãy so sánh, hãy đọc các nguồn tin khác, hãy đọc báo. Nếu đọc được một tin mà vẫn còn cảm thấy rằng là "À, chưa tin nổi" thì mình phải đi tìm kiếm các chỗ khác thay vì hỏi một câu cứ nhai đi nhai lại như một con bò là "Biya về không anh" rồi là vào cười haha xong rồi vào viết linh ta linh tinh ở trên đấy. Thì thay vì như thế các bạn hãy làm một việc này cho mình, hãy đi tìm xem, đọc trên các báo khác, hãy tìm đọc trên fanpage AniAni, hãy biết tiếng Anh để hiểu các nguồn tin của nước ngoài thay vì cứ đi hỏi "Biya về không anh?", tất cả những ai vào hỏi: "Biya về không anh", mình đều một là xóa, hai là block hết. Mình không thích chuyện này, nếu không tin bất cứ một vấn đề gì, thậm chí nếu không tin mình, các bạn có thể bỏ follow mình, không theo dõi 4rum của mình nhưng đừng bao giờ hỏi một câu là "Biya về không anh?", không hay ho một chút nào cả, các bạn nhá! Một là block, hai là xóa, không có chuyện cứ nhai đi nhai lại cái một câu là "Biya về không anh?".',
    '많은 분들이 "형님, 사실인가요?"라는 문장을 계속 반복하시며 "형님, 사실인가요?"를 알고 싶어 하십니다. 그런 다음 비교하고 다른 출처를 읽고 신문을 읽으십시오. 뉴스를 보고도 "아, 믿을 수 없다"는 생각이 든다면 소처럼 같은 질문을 반복해서 "사실인가요?" 웃으라고 하하 그리고 위에 제 잡다한 것들을 적겠습니다. 그러니 그것보다는 스스로 해보고, 찾아보고, 다른 신문에서 읽고, 다른 팬 페이지에서 읽고, 그냥 가지 말고 영어로 외국 뉴스 소스를 이해하십시오. "뉴스가 맞습니까?" 누가 들어와서 "사실인가요?"라고 물었고 삭제했거나 모두 차단했습니다. 나는 이것이 마음에 들지 않습니다. 아무것도 믿지 않는다면 나를 믿지 않더라도 나를 팔로우 해제하고 내 포럼을 팔로우하지 말고 "사실입니까? ? "라는 질문을하지 마십시오. 전혀 멋지지 않아, 얘들 아! 하나는 차단하는 것이고, 다른 하나는 삭제하는 것이고, "오빠야, 진짜야?" 같은 문장을 반복할 일이 없다.',
    "Thôi cất Biya vào góc được rồi, hoạ sĩ khách mời tiếp theo là Hews-sama. sasuga Hews-sama, đây mới là hoạ sĩ đích thực chứ như ai mang danh hoạ sĩ lại nổi nhờ cosplay, vứt vứt.",
]
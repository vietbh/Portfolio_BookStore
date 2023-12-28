import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardBlog({keyBaiViet,image}) {
  return (
    <Card key={keyBaiViet} className='mb-4'>
      <Card.Img variant="top" src="img/product-1.jpg" />
      <Card.Body>
        <Card.Title>Bài viết số 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p><a class="btn btn-primary btn-large" href="#!">Đọc thêm »</a> </p>
      </Card.Body>
    </Card>
  );
}

export default CardBlog;
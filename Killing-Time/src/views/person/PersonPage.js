import styled from "styled-components";

function Pagination({ total, page, setPage }) {

    const start = Math.max(page - 2, 1);
    const pages = [];
    if (start >= total-3) {
        for (let idx = start; idx < start+3; idx++) {
            pages.push(idx);  
        }     
    } else {
        for (let idx = start; idx < start+5; idx++) {
            pages.push(idx);
        }  
    }
    
    return (
        <>
        <Nav>
            <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
            </Button>
            {
                start > 2
                ?
                <>
                <Button onClick={() => setPage(1)}>
                1
                </Button>
                <p> … </p>
                </>
                : (
                    start > 1
                    ?
                    <>
                    <Button onClick={() => setPage(1)}>
                    1
                    </Button>
                    </>
                    :
                    <p></p>
                ) 
            }
            {
                pages
                .map((i) => (
                    <Button
                    key={i}
                    onClick={() => setPage(i)}
                    aria-current={parseInt(page) === i ? "page" : null}
                    >
                    {i}
                    </Button>
                ))
            }
            {
                start < parseInt(total)-5
                ?
                <>
                <p> … </p>
                <Button onClick={() => setPage(total)}>
                    {total}
                </Button>
                </>
                : (
                    start === parseInt(total)-4
                    ?
                    <>
                    </>
                        :
                        start <= parseInt(total)-3
                        ?
                        <>
                        <Button onClick={() => setPage(total)}>
                            {total}
                        </Button>
                        </>
                            :
                            <>
                            </>
                )
            }
            <Button onClick={() => setPage(page + 1)} disabled={page === total}>
            &gt;
            </Button>
        </Nav>
        </>
    );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: deeppink;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
import { Button } from "../../elements/Button/Button"

export const PaginationButton = () => {
  return (
    <div className="pagination-button">
      <Button disabled={false} colorType={'default'} text={'Previous'} />
      <Button disabled={false} colorType={'default'} text={'Next'} />
    </div>
  )
}
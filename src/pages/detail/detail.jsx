import { useParams } from 'react-router-dom';
import { items } from '../../model/items';
import { Button } from '../../components/widget/button';
export default function Detail() {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));
  if (!item) {
    return <div>Card not found</div>;
  }
  return (
    <div className="w-full  h-1/2  md:my-8 my-2">
      <div className=" overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <img
            src={item.image}
            alt=""
            className="p-5 h-[600px] w-full rounded-[60px]  object-cover bg-cover "
          />
          <div className="p-6">
            <div className="flex justify-center px-5 mb-3 py-1 mt-5 rounded-full w-fit border border-black">
              <p> Best Seller</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-secondaryBold font-bold mb-4">
              {item.title}
            </h2>
            <p className="font-primaryMedium text-lg mb-3"> Description</p>
            <p className="text-gray-700 mb-4">{item.description}</p>

            <div className="text-gray-700 mb-4">{item.advantage}</div>
            <Button link={item.link} name="Buy Now" />
          </div>
        </div>
      </div>
    </div>
  );
}

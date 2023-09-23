import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

const FavouriteCard = ({phone}) => {
    const {image,id,phone_name,brand_name} = phone || {};
    return (
        <div>
            <div className="flex justify-center items-center mt-9">
           <Card className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {brand_name}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {phone_name}
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex text-pink-600 items-center gap-2">
            Add to Favourites
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
            </Card>
           </div>
        </div>
    );
};

export default FavouriteCard;
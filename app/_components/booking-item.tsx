import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
    return ( 
        <div>
            <Card>
                <CardContent className="p-5 flex justify-between py-0">
                    <div className="flex flex-col gap-2 py-5">
                        <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">Confirmado</Badge>
                        <h2 className="font-bold">Corte de Cabelo</h2>

                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src="/avatar.png"></AvatarImage>
                                <AvatarFallback>A</AvatarFallback>
                            </Avatar>

                            <h3>Vintage Barber</h3>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center px-3 border-l-2 border-solid border-secondary">
                        <p className="text-sm">Fevereiro</p>
                        <p className="text-2xl">06</p>
                        <p className="text-sm">9:45</p>
                    </div>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default BookingItem;
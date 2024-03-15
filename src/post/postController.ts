import { Controller, Get } from '@nestjs/common';


@Controller('post')
export class PostController {

    @Get()
    all() {
        return 'all post';
    }
}

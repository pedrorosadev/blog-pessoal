import { Module } from "@nestjs/common/decorators";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
      controllers: [],
      providers: [],
      exports: [TypeOrmModule]
})

export class PostagemModule{}
import { Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypts/bcrypt";

@Module({
    imports: [],
    providers: [Bcrypt],
    controllers: [],
    exports: [Bcrypt]
})
export class AuthModule{}
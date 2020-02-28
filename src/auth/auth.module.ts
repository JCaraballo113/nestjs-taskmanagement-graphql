import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import UserResolver from './resolvers/user.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserRepository]),
        JwtModule.register({
            secret: 'secret',
            signOptions: {
                expiresIn: 3600
            }
        })
    ],
    providers: [UserResolver, AuthService]
})
export class AuthModule {}

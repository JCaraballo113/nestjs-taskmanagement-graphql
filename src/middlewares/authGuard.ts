import {
    Injectable,
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
    Inject
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        @Inject('JwtService') private readonly jwtService: JwtService
    ) {}
    canActivate(context: ExecutionContext): boolean {
        const ctx = GqlExecutionContext.create(context);
        const authorization = ctx.getContext().req.headers['authorization'];
        if (!authorization) {
            throw new UnauthorizedException('Not authenticated');
        }

        try {
            const token = authorization.split(' ')[1];
            console.log(token);
            return true;
        } catch (err) {
            console.log(err);
            throw new UnauthorizedException('Not authenticated');
        }

        return false;
    }
}

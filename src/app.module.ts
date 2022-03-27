import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { FrontEndMiddleware } from './common/middleware/frontend.middleware';
import { CompaniesModule } from './companies/companies.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: ['.env.local']
    }),
    UsersModule,
    CompaniesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FrontEndMiddleware)
      .forRoutes({
        path: '/**',
        method: RequestMethod.ALL
      });
      // .forRoutes({ path: 'tickets', method: RequestMethod.GET })
      // .forRoutes('tickets');
  }
}

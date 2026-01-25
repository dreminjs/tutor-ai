import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit {
  constructor(@Inject('REDIS_CLIENT') private readonly redis: Redis) {}

  private readonly logger = new Logger(RedisService.name);

  async onModuleInit() {
    try {
      const pong = await this.redis.ping();
      this.logger.log(`Redis connection test: ${pong}`);
    } catch (error) {
      this.logger.error('Failed to connect to Redis:', error.message);
    }
  }

  getClient(): Redis {
    return this.redis;
  }
}

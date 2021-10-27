import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ApiTags } from "@nestjs/swagger";

@Controller('report')
@ApiTags('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get(':type')
  margin(@Param('type')  type:string) {
    return this.reportService.margin(type);
  }


  @Get('/transaction/:type')
  transaction(@Param('type')  type:string) {
    return this.reportService.transaction(type);
  }


  @Get('/customer/:type')
  customer(@Param('type')  type:string) {
    return this.reportService.customer(type);
  }


}

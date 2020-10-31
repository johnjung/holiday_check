<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;
require 'vendor/autoload.php';

final class CheckHolidayTest extends TestCase
{
    public function testSunday(): void
    {
        $this->assertTrue(
            CheckHoliday::is_sunday(
                new DateTime('2020-11-01 08:00:00')
            )
        );

        $this->assertFalse(
            CheckHoliday::is_sunday(
                new DateTime('2020-11-02 08:00:00')
            )
        );

        $this->assertTrue(
            CheckHoliday::is_sunday(
                new DateTime('2020-11-08 08:00:00')
            )
        );
    }

    public function testNewYearsDay(): void
    {
        $this->assertTrue(
            CheckHoliday::is_new_years_day(
                new DateTime('2020-01-01 08:00:00')
            )
        );
    }

    public function testEaster(): void
    {
        $this->assertTrue(
            CheckHoliday::is_easter(
                new DateTime('2020-04-12 08:00:00')
            )
        );

        $this->assertTrue(
            CheckHoliday::is_easter(
                new DateTime('2021-04-04 08:00:00')
            )
        );

        $this->assertTrue(
            CheckHoliday::is_easter(
                new DateTime('2022-04-17 08:00:00')
            )
        );
    }

    public function testMemorialDay(): void
    {
        $this->assertTrue(
            CheckHoliday::is_memorial_day(
                new DateTime('2020-05-25 08:00:00')
            )
        );

        $this->assertTrue(
            CheckHoliday::is_memorial_day(
                new DateTime('2021-05-31 08:00:00')
            )
        );

        $this->assertTrue(
            CheckHoliday::is_memorial_day(
                new DateTime('2022-05-30 08:00:00')
            )
        );
    }

    public function testJulyFourth(): void
    {
        $this->assertTrue(
            CheckHoliday::is_july_fourth(
                new DateTime('2020-07-04 08:00:00')
            )
        );
    }

    public function testLaborDay(): void
    {
        $this->assertTrue(
            CheckHoliday::is_labor_day(
                new DateTime('2020-09-07 08:00:00')
            )
        );

        $this->assertTrue(
            CheckHoliday::is_labor_day(
                new DateTime('2021-09-06 08:00:00')
            )
        );

        $this->assertTrue(
            CheckHoliday::is_labor_day(
                new DateTime('2022-09-05 08:00:00')
            )
        );
    }

    public function testThanksgiving(): void
    {
        $this->assertTrue(
            CheckHoliday::is_thanksgiving(
                new DateTime('2020-11-26 08:00:00')
            )
        );

        $this->assertTrue(
            CheckHoliday::is_thanksgiving(
                new DateTime('2021-11-25 08:00:00')
            )
        );

        $this->assertTrue(
            CheckHoliday::is_thanksgiving(
                new DateTime('2022-11-24 08:00:00')
            )
        );
    }

    public function testDayAfterThanksgiving(): void
    {
        $this->assertTrue(
            CheckHoliday::is_day_after_thanksgiving(
                new DateTime('2020-11-27 08:00:00')
            )
        );

        $this->assertTrue(
            CheckHoliday::is_day_after_thanksgiving(
                new DateTime('2021-11-26 08:00:00')
            )
        );

        $this->assertTrue(
            CheckHoliday::is_day_after_thanksgiving(
                new DateTime('2022-11-25 08:00:00')
            )
        );
    }

    public function testChristmasEve(): void
    {
        $this->assertTrue(
            CheckHoliday::is_christmas_eve(
                new DateTime('2020-12-24 08:00:00')
            )
        );
    }

    public function testChristmas(): void
    {
        $this->assertTrue(
            CheckHoliday::is_christmas(
                new DateTime('2020-12-25 08:00:00')
            )
        );
    }

    public function testNewYearsEve(): void
    {
        $this->assertTrue(
            CheckHoliday::is_new_years_eve(
                new DateTime('2020-12-31 08:00:00')
            )
        );
    }
}
